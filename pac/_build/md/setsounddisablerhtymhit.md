# setSoundDisableRhtymHit

Enables or disables command cancel **before mission**. This **changes system setting**:.

## Code Information

- **Name**: `setSoundDisableRhtymHit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 24 00`
- **Assembly Address in Memory** : `0x894b8c8`

## Parameters

- `(int)disable_commandcancel` *(8 bytes)* : 0 to enable command cancel, 1 to disable command cancel.

## Example

Here is one example in hex:

```25 0a 24 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setSoundDisableRhtymHit((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b8c8(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *piVar1;
  iVar2 = Save::Get_Save_BaseAddr(1);
  return__0x1c(*(undefined4 *)(iVar2 + 0x50));
  iVar2 = Save::Get_Save_BaseAddr(1);
  *(bool *)(*(int *)(iVar2 + 0x48) + 0x8ae) = iVar3 == 0;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

