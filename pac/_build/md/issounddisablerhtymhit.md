# isSoundDisableRhtymHit

Reads **from system setting** if command cancel is disabled.

## Code Information

- **Name**: `isSoundDisableRhtymHit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 26 00`
- **Assembly Address in Memory** : `0x894b9a4`

## Parameters

- `(uint *)disable_commandcancel` *(8 bytes)* : 0 to enable command cancel, 1 to disable command cancel.

## Example

Here is one example in hex:

```25 0a 26 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isSoundDisableRhtymHit((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b9a4(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  int iVar2;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Save::Get_Save_BaseAddr(1);
  return__0x1c(*(undefined4 *)(iVar2 + 0x50));
  iVar2 = Save::Get_Save_BaseAddr(1);
  *puVar1 = *(char *)(*(int *)(iVar2 + 0x48) + 0x8ae) != '\0' ^ 1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

