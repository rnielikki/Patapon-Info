# getResultSaveMS

Checks if the saving is done. Called after [saveMs](./savems.md).

## Code Information

- **Name**: `getResultSaveMS`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 1e 00`
- **Assembly Address in Memory** : `0x8b4f830`

## Parameters

- `(bool)is_saving` *(8 bytes)* : 1 if the saving is **not** done, 0 if saving is done.

## Example

Here is one example in hex:

```25 1c 1e 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getResultSaveMS((int *)iVar0)
```

This is an example how to save the data properly.

```c
0000A504  251C1D00:saveMS(2:0, 2:0)
0000A518  25000200:cmd_jmp(1:A554)
  0000A554  25000F00:cmd_waitFrame(2:1)
  0000A560  251C1E00:getResultSaveMS(4:0)
  0000A56C  25001D00:cmd_ifAND(4:0, 2:1, 1:A554) //if saving is not done, go before, so block the instruction flow until saving is done
  0000A584  25000100:cmd_end()```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4f830(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar2 = FUN_Azito__08b51148(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x204));
    *puVar1 = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

