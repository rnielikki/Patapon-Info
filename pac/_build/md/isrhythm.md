# isRhythm

Checks if the player is in the chant turn.

## Code Information

- **Name**: `isRhythm`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 05 00`
- **Assembly Address in Memory** : `0x8970498`

## Parameters

- `(int *)chant_turn` *(8 bytes)* : Variable to *store* the result, 1 if the player is in chant turn, otherwise 0 (including no combo/fever).

## Example

Here is one example in hex:

```25 0c 05 00 / 08 00 00 00 / 24 00 00 00```

Which is interpreted as:

```c
isRhythm(((global)int *)giVar36)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970498(int param_1,undefined4 param_2)

{
  uint *puVar1;
  int iVar2;
  int *piVar3;
  uint uVar4;
  int iVar5;
  int local_4;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar5 != 0) {
    iVar2 = Get_Some_Flag(1);
    local_4 = *(int *)(*(int *)(iVar2 + 0x44) + 0x28);
    if (DAT_08a71d54 < local_4) {
      piVar3 = &local_4;
    }
    else {
      piVar3 = &DAT_08a71d54;
    }
    uVar4 = func_0x08b5f7b8(iVar5,*piVar3);
    *puVar1 = uVar4 & 0xff;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

