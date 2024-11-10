# getMultiEventUnitHandle

Gets handle of the other players in the hideout for event. In normal hideout unit placing, **[getMultiHeroHandle](./getmultiherohandle.md)** is preferred.

## Code Information

- **Name**: `getMultiEventUnitHandle`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 0f 00`
- **Assembly Address in Memory** : `0x8b4dfb8`

## Parameters

- `(int *)destination` *(8 bytes)* : Destination to save the unit handle.
- `(int)Var1` *(8 bytes)* : Player index in multi.
- `(uint *)destination2` *(8 bytes)

## Example

Here is one example in hex:

```25 1c 0f 00 / 08 00 00 00 / 5b 00 00 00 / 08 00 00 00 / 5c 00 00 00 / 08 00 00 00 / 5d 00 00 00```

Which is interpreted as:

```c
getMultiEventUnitHandle(((global)int *)giVar91, ((global)int *)giVar92, ((global)int *)giVar93)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4dfb8(int param_1,undefined4 param_2)

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
       (iVar5 = iVar5 * 0x500 + *(int *)(*(int *)(param_1 + 0x10) + 0x1c4), iVar5 != -0x2b40)) &&
      ((int *)(iVar5 + 0x2b50) != (int *)0x0)) && (iVar4 = *(int *)(iVar5 + 0x2b50), iVar4 != 0)) {
    *piVar1 = (int)*(short *)(iVar4 + 0x78);
    *puVar3 = (uint)*(byte *)(iVar5 + 0x2ed8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

