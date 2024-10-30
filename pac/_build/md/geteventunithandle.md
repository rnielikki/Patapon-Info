# getEventUnitHandle

Gets handle of the non-multi units (Hero, Ton, Chin, Kan) in the hideout.

## Code Information

- **Name**: `getEventUnitHandle`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 0e 00`
- **Assembly Address in Memory** : `0x8b4dec8`

## Parameters

- `(int *)destination` *(8 bytes)* : Destination to save the unit handle.
- `(int)Var1` *(8 bytes)* : Event Unit ID. 0 is Hero, 1 is Ton, 2 is Chin, 3 is Kan. Hideout won't load with the other value.
- `(uint *)destination2` *(8 bytes)*

## Example

Here is one example in hex:

```25 1c 0e 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 3f 00 00 00```

Which is interpreted as:

```c
getEventUnitHandle((int *)iVar0, (int)1, (int *)iVar63)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4dec8(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  uint *puVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar5 = *piVar2;
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  *piVar1 = -1;
  *puVar3 = 0;
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar5 = iVar5 * 0x500 + *(int *)(*(int *)(param_1 + 0x10) + 0x1c4), iVar5 != -0x2f0)) &&
      ((int *)(iVar5 + 0x300) != (int *)0x0)) && (iVar4 = *(int *)(iVar5 + 0x300), iVar4 != 0)) {
    *piVar1 = (int)*(short *)(iVar4 + 0x78);
    *puVar3 = (uint)*(byte *)(iVar5 + 0x688);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

